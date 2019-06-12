import Ajv from 'ajv';
import {inspect} from 'util';

const specSchema = require('../build/vega-lite-schema.json');

describe('Schema', () => {
  it('should be valid', () => {
    const ajv = new Ajv({
      allErrors: true,
      verbose: true,
      extendRefs: 'fail'
    });

    ajv.addFormat('color-hex', () => true);

    // now validate our data against the schema
    const valid = ajv.validateSchema(specSchema);

    if (!valid) {
      console.log(inspect(ajv.errors, {depth: 10, colors: true}));
    }
    expect(valid).toBe(true);
  });
});
