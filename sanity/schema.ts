import { type SchemaTypeDefinition } from 'sanity'

import event from './schemas/event'
import ourMission from './schemas/ourMission'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [event, ourMission],
}
