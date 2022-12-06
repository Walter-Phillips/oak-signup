import type { AppProps } from 'next/app';
import InputField from '../components/InputField';
import Button from '../components/Button';
import ArrowRight from '../components/ArrowRight';
import React from 'react';
import { useRouter } from 'next/router';

export default function LastName() {
  const router = useRouter();
  return (
    <div className='flex place-content-center items-center justify-center min-h-screen'>
      <div className='w-96 py-10'>
        <InputField
          id='last-name'
          placeholder={'Doe'}
          label={'Last Name'}
          type={'text'}
          required={false}
        ></InputField>
        <Button
          onClick={() => {
            router.push('/PhoneNumber');
          }}
        >
          Next
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
