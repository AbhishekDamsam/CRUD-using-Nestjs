import { Project } from './entities/project.entity';

describe('Project', () => {
  it('should be defined', () => {
    expect(new Project()).toBeDefined();
  });
});
