import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();
  return (
    <div className='flex place-content-center items-center justify-center min-h-screen'>
      <div className='w-96'>
        <h1>Welcome to OAK </h1>
        <p>
          OAK is building a community currency to keep more of our value in Oakland.
          We’re starting by building a network of values-aligned events & businesses.
          Join the movement and we’ll text you 1-2 events per week.
        </p>
        <Button
          onClick={() => {
            router.push('/FirstName');
          }}
        >
          SignUp
        </Button>
      </div>
    </div>
  );
}
