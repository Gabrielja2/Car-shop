import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';

import { newCar, cars } from './carMock';
import CarService from '../../../src/Services/CarService';
import { validCar } from '../../../__tests__/utils/CarsMock';

describe('Testando a rota /Cars', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Verifica se cria um newCar corretamente', async function () {
    sinon.stub(Model, 'create').resolves(newCar);

    const service = new CarService();
    const result = await service.create(validCar);

    expect(result).to.be.deep.equal(newCar);
  });

  it('Verifica se lista todos os carros corretamente', async function () {
    sinon.stub(Model, 'find').resolves(cars);

    const service = new CarService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(cars);
  });

  it('Verifica se lista um carro corretamente buscando por id', async function () {
    sinon.stub(Model, 'findById').resolves(newCar);

    const service = new CarService();
    const result = await service.getById('63780d9810599b8d21ed4721');

    expect(result).to.be.deep.equal(newCar);
  });

  it('Verifica se da erro ao pesquisar por um id inválido', async function () {
    try {
      const service = new CarService();
      await service.getById('invalid');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });
});