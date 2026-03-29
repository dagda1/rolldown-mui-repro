import Form from '@rjsf/mui';
import validator from '@rjsf/validator-ajv8';

const schema = {
  type: 'object',
  properties: {
    name: { type: 'string', title: 'Name' },
  },
};

interface SimpleFormProps {
  onSubmit: (data: unknown) => void;
}

export function SimpleForm({ onSubmit }: SimpleFormProps): JSX.Element {
  return <Form schema={schema} validator={validator} onSubmit={onSubmit} />;
}
