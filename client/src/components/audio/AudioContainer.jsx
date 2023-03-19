import React from 'react';
// Data
import { altShiftData, distanceData, gedData } from '../../utils/Data';
// Components
import AudioItem from './AudioItem';

console.log('alt', altShiftData);
function AudioContainer() {
  return (
    <section className='grid gap-6 w-full'>
      <h2 className='text-xl font-bold'>Scores</h2>
      {/* 1 */}
      <article className='grid w-full'>
        <h3 className='text-xl my-2 font-semibold italic'>
          Alt+Shift For Orchestra
        </h3>
        <section className='w-full'>
          <ul className='grid gap-2 md:gap-[1px] w-full'>
            {altShiftData.map((dataItem, index) => {
              return <AudioItem key={index} dataItem={dataItem} />;
            })}
          </ul>
        </section>
      </article>

      {/* 2 */}
      <article className='grid'>
        <h3 className='text-xl my-2 font-semibold italic'>
          The Garden of Earthly Delights for Large Orchestra
        </h3>
        <section>
          <ul className='grid gap-[1px]'>
            {gedData.map((dataItem, index) => {
              return <AudioItem key={index} dataItem={dataItem} />;
            })}
          </ul>
        </section>
      </article>

      {/* 3 */}
      <article className='grid'>
        <h3 className='text-xl my-2 font-semibold italic'>
          Distance, Piano Concerto - First Movement
        </h3>
        <section>
          <ul className='grid gap-[1px]'>
            {distanceData.map((dataItem, index) => {
              return <AudioItem key={index} dataItem={dataItem} />;
            })}
          </ul>
        </section>
      </article>
    </section>
  );
}

export default AudioContainer;
