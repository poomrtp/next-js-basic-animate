'use client';
import Image from 'next/image';
import { FC, HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import ThemeSwitcher from './themeSwitcher';
import { ArrowTopRightOnSquare } from '@/icons';

interface ILayoutProps {
  children?: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <header className="border-b border-base-content/20 p-2 md:px-8 flex justify-between place-items-center gap-4">
        <div>Spotifine Live House</div>
        <div className="flex justify-end place-items-center">
          <ThemeSwitcher />
        </div>
      </header> */}
      <main className="grow flex flex-row overflow-y-auto">{children}</main>
      <footer className="flex justify-center border-t border-base-content/20 p-4">
        <a
          href="https://github.com/poomrtp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex place-items-center gap-2">
            <span>Github</span>
            <span>
              <ArrowTopRightOnSquare />
            </span>
          </button>
        </a>
      </footer>
    </div>
  );
}

export default Layout;
