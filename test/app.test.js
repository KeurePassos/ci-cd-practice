const soma = require('../app');
test('deve somar 2 e 3 para obter 5', () => {
 expect(soma(2, 3)).toBe(5);
});
