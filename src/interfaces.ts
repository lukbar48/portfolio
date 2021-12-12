import { ReactNode } from 'react';

export interface IButton { 
  children: ReactNode;
  backgroundColor?: string;
  width?: string;
  height?: string;
  live?: boolean;
  href?: string;
  color?: string;
}

export interface ITechItem {
  name: string;
  img: string;
}
