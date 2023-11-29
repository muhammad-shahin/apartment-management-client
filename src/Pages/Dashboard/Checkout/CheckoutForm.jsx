import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxios from '../../../Hooks/useAxios';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import SecondaryButton from '../../../Shared/SecondaryButton';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ billingInfo, subTotalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const paymentInitiate = JSON.parse(localStorage.getItem('paymentInitiate'));
  const secureAxios = useAxios();
  const [errorMessage, setErrorMessage] = useState(null);
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    secureAxios
      .post('/create-payment-intent', { price: subTotalPrice })
      .then((res) => {
        console.log('Payment Initiated : ', res.data);
        setClientSecret(res?.data?.clientSecret);
      })
      .catch((err) => {
        console.log('Payment Initiated Failed: ', err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subTotalPrice]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('Stripe Payment Error : ', error);
      setErrorMessage(error.message);
    } else {
      console.log('Stripe Payment Intent Success : ', paymentMethod);
      setErrorMessage('');
    }

    // confirm payment
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: billingInfo?.billingName || 'anonymous',
          email: billingInfo?.billingEmail !== '' || 'anonymous@email.com',
          phone: billingInfo?.billingPhone || 'anonymous',
        },
      },
    });

    if (result.paymentIntent) {
      if (result.paymentIntent.status === 'succeeded') {
        const paymentIntent = result.paymentIntent;
        paymentInitiate.otherPaymentInfo = {
          amount: paymentIntent.amount / 100,
          paymentId: paymentIntent.id,
          currency: paymentIntent.currency,
          method: paymentIntent.payment_method_types[0],
        };
        secureAxios
          .post('/payment', paymentInitiate)
          .then((res) => {
            if (res.data.success && res.data.insertedId) {
              console.log(res.data.insertedId);
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Payment Completed Successfully',
                showConfirmButton: false,
                timer: 2500,
              });
              navigate('/dashboard/payment-history')
            }
          })
          .catch((err) => {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Payment Failed! Please Try Again',
              text: `${err}`,
              showConfirmButton: false,
              timer: 2500,
            });
          });
        console.log(paymentInitiate);
      }
    } else if (result.error) {
      setErrorMessage(result.error.message);
    }

    if (result?.paymentIntent) {
      console.log('Payment Intent: ', result?.paymentIntent);
    }
    if (
      result.error?.type === 'card_error' ||
      error?.type === 'validation_error'
    ) {
      setErrorMessage(error.message);
    } else {
      setErrorMessage('An unexpected error occurred.');
    }
  };
  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className='w-[420px] p-5 rounded-sm'
      >
        <CardElement
          className='border-2 p-3 rounded-lg border-blue-400'
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        ></CardElement>
        <p className='text-red-500 text-center mt-2'>{errorMessage}</p>
        <div className='w-fit mx-auto mt-6'>
          <SecondaryButton
            type='submit'
            disabled={!stripe}
            text='Pay'
            className='rounded-full py-1 min-w-[250px]'
          >
            Pay
          </SecondaryButton>
        </div>
      </form>
    </>
  );
};
CheckoutForm.propTypes = {
  billingInfo: PropTypes.object,
  subTotalPrice: PropTypes.number,
};
export default CheckoutForm;
