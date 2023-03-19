import React from 'react';
// Data
import { altShiftData } from '../../utils/Data';
import AudioItem from './AudioItem';

console.log('alt', altShiftData)
function AudioContainer() {
  return (
    <section>
      <h2 className='text-xl font-bold'>Scores</h2>

      <article className='grid'>
        <h3 className='text-xl my-2 font-semibold italic'>
          Alt+Shift For Orchestra
        </h3>
        {/* 1 */}
        <section>
          <ul className='grid gap-[1px]'>
            {altShiftData.map((dataItem, index) => {
              return (
                <AudioItem key={index} dataItem={dataItem} />
              )
            })}
          </ul>
        </section>
      </article>
    </section>
  );
}

export default AudioContainer;
