import { tv } from 'tailwind-variants';

/** Completely unstyled button, only with the right accessibility styles. */
export const baseButton = tv({
  base: 'block cursor-pointer touch-none select-none outline-primary-200'
});

/** General Rounded Buttons. */
export const button = tv({
  base: 'transform rounded-full font-circularstd shadow transition active:scale-95',
  extend: baseButton,
  variants: {
    color: {
      primary: 'bg-primary-500 text-white ',
      secondary: 'bg-white text-primary-500'
    },
    size: {
      base: 'px-5 py-3 text-base',
      lg: 'px-20 py-4 text-2xl'
    }
  },
  defaultVariants: {
    size: 'lg',
    color: 'primary',
    rounded: 'full'
  }
});

/** The audio playing element */
export const audioPlayerCard = tv({
  slots: {
    headerFullname: '',
    headerIconVerified: 'text-primary-500',
    headerUsername: 'text-primary-400'
  },
  variants: {
    color: {
      secondary: {
        headerFullname: 'text-white',
        headerIconVerified: 'text-white',
        headerUsername: 'text-primary-200'
      }
    }
  }
});
