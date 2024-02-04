import { expect, it, describe } from 'vitest';
import { validateTags, validateTime } from '../utils';

// start with describe that takes in a string param to
// describe what the test suite is doing
// then it takes in a callback function that will run your test
describe('ValidateTags functionality test', () => {
  // use it to initialize your test, it also takes
  // a text and a callback function
  // describe your test

  it('returns object with error values', () => {
    // create a var that will hold
    // the function with its possible parameters and a result
    // what you expect it to equal

    // if the tag arr is empty then its an error
    const func = validateTags([]);
    const res = {
      tagColor: 'red',
      tagText: 'You must select at least one tag for your event',
    };

    // use expect and to equal to see if your function and result
    // will be the same
    expect(func).toEqual(res);
  });

  it('returns object with null values', () => {
    // if the tags arr has at least 1 value then its good
    const func = validateTags([1]);
    const res = {
      tagColor: null,
      tagText: null,
    };

    expect(func).toEqual(res);
  });
});

describe('ValidateTime functionality test', () => {
  it('returns object with error values', () => {
    // checking if times are the same
    const func1 = validateTime('13:09', '13:09');
    const res1 = {
      color: 'red',
      timeText: 'Start time cannot be the same as end time',
    };

    expect(func1).toEqual(res1);

    // checking if start time is > than end time
    const func2 = validateTime('1:18', '1:00');
    const res2 = {
      color: 'red',
      timeText: 'Start time cannot be later than end time',
    };

    expect(func2).toEqual(res2);
  });

  it('returns object with null values', () => {
    // checking if times are correct
    const func = validateTime('12:00', '12:30');
    const res = {
      color: null,
      timeText: null,
    };

    expect(func).toEqual(res);
  });
});
