import { type SchemaTypeDefinition } from 'sanity'

import event from './schemas/event'
import ourMission from './schemas/ourMission'

import leaderSunAM from './schemas/Leaders/leaderSunAm'
import leaderSunPM from './schemas/Leaders/leaderSunPM'
import leaderSatPM from './schemas/Leaders/leaderSatPM'

import resourceBlock from './schemas/resourceBlock'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [event, ourMission, leaderSunAM, leaderSunPM, leaderSatPM, resourceBlock],
}
