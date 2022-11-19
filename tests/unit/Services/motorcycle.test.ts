import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';

import { newMotorcycle, motorcycles } from './motorcycleMock';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { validMotorcycle } from '../../../__tests__/utils/MotorcyclesMock';

describe('Testando a rota /motorcycles', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Verifica se cria uma newMotorcycle corretamente', async function () {
    sinon.stub(Model, 'create').resolves(newMotorcycle);

    const service = new MotorcycleService();
    const result = await service.create(validMotorcycle);

    expect(result).to.be.deep.equal(newMotorcycle);
  });

  it('Verifica se lista todas as motorcycles corretamente', async function () {
    sinon.stub(Model, 'find').resolves(motorcycles);

    const service = new MotorcycleService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(motorcycles);
  });

  it('Verifica se lista uma motorcycle corretamente buscando por id', async function () {
    sinon.stub(Model, 'findById').resolves(newMotorcycle);

    const service = new MotorcycleService();
    const result = await service.getById('6378dd917cf826f154b09e2f');

    expect(result).to.be.deep.equal(newMotorcycle);
  });

  it('Verifica se da erro ao pesquisar por um id inválido', async function () {
    try {
      const service = new MotorcycleService();
      await service.getById('invalid');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });

  it('Verifica se é possível editar uma motorcycle com sucesso', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(newMotorcycle);

    const service = new MotorcycleService();
    const result = await service.updateById(validMotorcycle, '6378dd917cf826f154b09e2f');
    
    expect(result).to.be.deep.equal(newMotorcycle);
  });

  it('Verifica se da erro ao editar por um id inválido', async function () {
    try {
      const service = new MotorcycleService();
      await service.updateById(validMotorcycle, 'invalid');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });
});