import '../styles/globals.css';
import type { AppProps } from 'next/app';
import InputField from '../components/InputField';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <InputField
        id='email'
        placeholder={'dnasldkjna'}
        label={'djalisda'}
        type={'text'}
        required={false}
      ></InputField>
    </div>
  );
}
