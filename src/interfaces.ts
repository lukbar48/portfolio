import { ReactNode } from 'react';

export interface IButton { 
  backgroundColor?: string;
  children: ReactNode;
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