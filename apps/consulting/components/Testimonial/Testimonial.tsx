import { FC } from 'react';

import { Quote } from './Quote/Quote';
import { Triangle } from './Triangle';
import { TTestimonialProps } from './types';

export const Testimonial: FC<TTestimonialProps> = ({
  header,
  text,
  imageSrc,
  imageAlt,
  testimonial,
  person,
  position,
}) => (
  <section className="md:py-[5rem]">
    <div className="bg-pink relative text-white">
      <Triangle />
      <div className="max-w-layout mx-auto pb-[14rem] pt-[3.6rem] md:pb-[30rem] md:pt-[11rem]">
        <div className="px-[2.4rem] md:flex md:gap-[7rem] lg:px-[13rem]">
          <h2
            className="
              font-heading text-[4rem] font-extrabold leading-[4.9rem]
              md:w-1/2 md:text-[4.8rem]
            "
          >
            {header}
          </h2>
          <p className="mt-[3.6rem] text-[1.6rem] leading-[2.7rem] md:mt-0 md:w-1/2">
            {text}
          </p>
        </div>
      </div>
    </div>
    <div className="mt-[-6.6rem] px-[2.4rem] md:mt-[-20rem] md:px-[8rem]">
      <Quote
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        testimonial={testimonial}
        person={person}
        position={position}
      />
    </div>
  </section>
);
