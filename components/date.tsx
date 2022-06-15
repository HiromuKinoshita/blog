import React, { ReactElement } from 'react';
import { parseISO, format } from 'date-fns'
import { dateString } from './date.d'

export default function Date({ dateString }: dateString): ReactElement {
  const date: Date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  const d = '20220501'

  it('Date', () => {
    expect(Date({ dateString: d }).props.children).toBe('May 1, 2022')
  })
}
