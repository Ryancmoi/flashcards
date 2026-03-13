import vine from '@vinejs/vine'

const DeckValidator = vine.compile(
  vine.object({
    title: vine.string().trim(),
    description: vine.string().trim().minLength(10),
  })
)

export { DeckValidator }
