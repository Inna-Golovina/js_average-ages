'use strict';

/**
 * Implement calculateMenAverageAge function
 *
 * Function returns average age of men in array. If `century` is specified then
 * function calculates average age only for men who died in this century
 *
 * To calculate century:
 * Divide year of person's death by 100: Math.ceil(person.died / 100)
 *
 * @param {object[]} people
 * @param {number} century - optional
 *
 * @return {number}
 */
function calculateMenAverageAge(people, century) {
  // write code here
  // learn how to use array methods like .filter .map .some .every .find .reduce
  // avoid using loop and forEach
  // replace `if ()` statement with &&, || or ?:
  // without nesting
  const men = (century === undefined)
    ? people.filter(person => person.sex === 'm')
    : people.filter(person => person.sex === 'm'
  && Math.ceil(person.died / 100) === century);

  const numberOfMen = men.length;

  const averageAge = men.reduce((
    sum, currentValueMan
  ) => sum + (currentValueMan.died - currentValueMan.born), 0);

  return averageAge / numberOfMen;
}

/**
 * Implement calculateWomenAverageAge function
 *
 * Function returns average ave of women in array. If `withChildren` is
 * specified then function calculates average age only for women with children
 *
 * @param {object[]} people
 * @param {boolean} withChildren - optional
 *
 * @return {number}
 */
function calculateWomenAverageAge(people, withChildren) {
  // write code here
  let women = people.filter(person => person.sex === 'f');

  women = (withChildren)
    ? women.filter(person =>
      people.some(woman =>
        woman.mother === person.name
      ))
    : women;

  const numberOfWomen = women.length;

  const womenAverageAge = women.reduce((
    sum, currentValueWoman
  ) => sum + currentValueWoman.died - currentValueWoman.born, 0);

  return womenAverageAge / numberOfWomen;
}

/**
 * Implement calculateAverageAgeDiff function.
 *
 * The function returns an average age difference between a mother and her
 * child in the array. (A mother's age at child birth)
 *
 * If `onlyWithSon` is specified then function calculates age difference only
 * for mothers who have son.
 *
 * @param {object[]} people
 * @param {boolean} onlyWithSon - optional
 *
 * @return {number}
 */
function calculateAverageAgeDiff(people, onlyWithSon) {
  // write code here
  const mothers = people.filter(person =>
    (onlyWithSon)
      ? people.some(child => child.name === person.mother) && person.sex === 'm'
      : people.some(child => child.name === person.mother)
  );
  const ageDiff = mothers.map(person =>
    person.born - people.find(woman => woman.name === person.mother).born
  );

  const numberOfAgeDiff = ageDiff.length;
  const averageAgeDiff = ageDiff.reduce((sum, currentValue) => {
    return sum + currentValue;
  }, 0);

  return averageAgeDiff / numberOfAgeDiff;
}

module.exports = {
  calculateMenAverageAge,
  calculateWomenAverageAge,
  calculateAverageAgeDiff,
};
