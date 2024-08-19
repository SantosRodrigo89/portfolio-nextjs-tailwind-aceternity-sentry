'use client';
import dynamic from 'next/dynamic';
import { PinContainer as OriginalPinContainer } from './3d-pin';

const ClientPinContainer = dynamic(() => Promise.resolve(OriginalPinContainer), {
  ssr: false,
});

export default ClientPinContainer;