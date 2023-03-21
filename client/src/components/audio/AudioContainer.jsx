import React from 'react';
// Data
import { altShiftData, gedData } from '../../utils/Data';
// Components
import AudioItem from './AudioItem';
// PDF
import PDF1 from '../../assets/pdf/altShift.pdf';
import PDF2 from '../../assets/pdf/goed.pdf';
import PDF3 from '../../assets/pdf/distance2.pdf';

console.log('alt', altShiftData);
function AudioContainer() {
  return (
    <section className='grid gap-6 w-full'>
      <h2 className='text-2xl font-bold'>Scores</h2>
      {/* 1 */}
      <article className='grid w-full mb-4'>
        <h3 className='text-xl my-4 font-semibold italic'>
          Alt+Shift For Orchestra
        </h3>
        <section>
          <ul className='grid gap-[1px]'>
            {altShiftData.map((dataItem, index) => {
              return <AudioItem key={index} dataItem={dataItem} />;
            })}
          </ul>
          <section className='w-full h-[450px] border-2 border-black border-solid rounded mt-4'>
            <object
              data={PDF1}
              width='100%'
              type='application/pdf'
              frameborder='0'
              height='100%'
              pad
              className='resize-y'
            >
              <embed
                src='https://drive.google.com/file/d/1ceJHiKfm4CO-fWEbg1Wrv37iWi9U0anA/preview?usp=sharing"'
                width='100%'
                height='600px'
              />
            </object>
          </section>
        </section>
      </article>

      {/* 2 */}
      <article className='grid'>
        <h3 className='text-2xl my-4 font-semibold italic'>
          The Garden of Earthly Delights for Large Orchestra
        </h3>
        <section>
          <ul className='grid gap-[1px]'>
            {gedData.map((dataItem, index) => {
              return <AudioItem key={index} dataItem={dataItem} />;
            })}
          </ul>
          <section className='w-full h-[450px] border-2 border-black border-solid rounded mt-4'>
            <object
              data={PDF2}
              width='100%'
              type='application/pdf'
              frameborder='0'
              height='100%'
              pad
              className='resize-y'
            >
              <embed
                src='https://drive.google.com/file/d/1bh5UX41E8urK_78NSatnIp1X7q8t8RUq/preview?usp=sharing"'
                width='100%'
                height='600px'
              />
            </object>
          </section>
        </section>
      </article>

      {/* 3 */}
      <article className='grid'>
        <h3 className='text-2xl my-4 font-semibold italic'>
          Distance, Piano Concerto - First Movement
        </h3>
        <section>
          <section className='w-full h-[450px] border-2 border-black border-solid rounded mt-4'>
            <object
              data={PDF3}
              width='100%'
              type='application/pdf'
              frameborder='0'
              height='100%'
              pad
              className='resize-y'
            >
              <embed
                src='https://drive.google.com/file/d/1tBAZKBP_TioRqtlU26c93pp2z9Rg4Jx0/preview?usp=sharing"'
                width='100%'
                height='600px'
              />
            </object>
          </section>
        </section>
      </article>
    </section>
  );
}

export default AudioContainer;
