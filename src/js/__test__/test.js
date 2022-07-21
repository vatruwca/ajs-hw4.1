import healthLevel from '../health';

test('green health level', () => {
  const greenHealth = healthLevel({ name: 'Маг', health: 73 });
  expect(greenHealth).toBe('healthy');
});

test('yellow health level', () => {
  const yellowHealth = healthLevel({ name: 'Маг', health: 46 });
  expect(yellowHealth).toBe('wounded');
});

test('red health level', () => {
  const redHealth = healthLevel({ name: 'Маг', health: 8 });
  expect(redHealth).toBe('critical');
});
