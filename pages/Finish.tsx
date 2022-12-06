import type { AppProps } from 'next/app';
import InputField from '../components/InputField';
import Button from '../components/Button';
import ArrowRight from '../components/ArrowRight';
import React from 'react';

export default function Finish() {
  return (
    <div className='flex place-content-center items-center justify-center min-h-screen'>
      <div className='w-96 py-10'>
        {/* eslint-disable-next-line react/no-unescaped-entities*/}
        <h1>It's all over now</h1>
        <Button onClick={() => {}}>
          <a href='https://oak.community'>Learn More</a>
        </Button>
      </div>
    </div>
  );
}
