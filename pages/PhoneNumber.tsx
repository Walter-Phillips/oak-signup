import type { AppProps } from 'next/app';
import InputField from '../components/InputField';
import Button from '../components/Button';
import ArrowRight from '../components/ArrowRight';
import React from 'react';
import { useRouter } from 'next/router';

export default function PhoneNumber() {
  const router = useRouter();

  return (
    <div className='flex place-content-center items-center justify-center min-h-screen'>
      <div className='w-96 py-10'>
        <InputField
          id='phone-number'
          placeholder={'(000) 000-0000'}
          label={'Phone Number'}
          type={'text'}
          required={false}
        ></InputField>
        <Button
          onClick={() => {
            router.push('/Email');
          }}
        >
          Next
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
