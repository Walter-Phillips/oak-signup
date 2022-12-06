import type { AppProps } from 'next/app';
import InputField from '../components/InputField';
import Button from '../components/Button';
import ArrowRight from '../components/ArrowRight';
import { useRouter } from 'next/router';

export default function Email() {
  const router = useRouter();
  return (
    <div className='flex place-content-center items-center justify-center min-h-screen'>
      <div className='w-96 py-10'>
        <InputField
          id='email'
          placeholder={'friend@oak.com'}
          label={'Email'}
          type={'text'}
          required={false}
        ></InputField>
        <Button
          onClick={() => {
            router.push('/Finish');
          }}
        >
          Next
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
