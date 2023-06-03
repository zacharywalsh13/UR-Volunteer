import { type SchemaTypeDefinition } from 'sanity'

import event from './schemas/event'
import blockContent from './schemas/blockContent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, event],
}
