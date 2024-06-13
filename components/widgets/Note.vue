<script lang="ts" setup>
const newNote = ref<boolean>(false)
const newNoteText = ref<string>('')
const noteEditing = ref<number | null>(null)
const newNoteInput = ref<HTMLInputElement | null>(null)

//TODO: get data from database
const noteData = ref([
  {
    id: 1,
    title: 'Go to grocery',

  },
  {
    id: 2,
    title: '1H Gym',
  },
  {
    id: 3,
    title: '30 minutes of reading',
  },
  {
    id: 4,
    title: 'Buy the new BD in the library library library library library',
  },
])

const newNoteButton = () => {
  newNote.value = true
  noteEditing.value = null
  newNoteInput.value?.focus()
}

const addNote = () => {
  //TODO: push data to database
  if (newNoteText.value === '') return
  noteData.value.push({
    id: noteData.value.length + 1,
    title: newNoteText.value,
  })
  newNote.value = false
  newNoteText.value = ''
}

const editNote = (id: number) => {
  noteEditing.value = id
  console.log('edit', id)
}

const confirmNote = (id?: number) => {
  //TODO: edit data in database
  noteEditing.value = null
}

const deleteNote = (id?: number) => {
  if (id) {
    noteData.value = noteData.value.filter((note) => note.id !== id)
  }
  noteEditing.value = null
  newNote.value = false
  newNoteText.value = ''
}

</script>

<template>
  <WidgetCard title="Take a note">
    <template #icon>
      <INoteBlank :size="24" />
    </template>
    <template #button>
      <AddButton text="note" @click="newNoteButton" />
    </template>
    <template #content>
      <Transition>
        <div class="flex flex-col gap-2" v-if="noteData.length || newNote">
          <ol class="space-y-2">
            <li v-for="note in noteData" :key="note.id" class="py-2 px-3 bg-primary/10 rounded">
              <div class="flex justify-between items-center gap-3">
                <template v-if="noteEditing === note.id">
                  <textarea class="input-note custom-scrollbar" v-model="note.title"></textarea>
                  <div class="flx-center flex-col gap-2">
                    <Tooltip>
                      <template #text>
                        <button type="button" class="valid-button" @click="confirmNote(note.id)">
                          <ICheck :size="16" />
                        </button>
                      </template>
                      <template #content>
                        <p class="text-xs">Valider</p>
                      </template>
                    </Tooltip>
                    <Tooltip>
                      <template #text>
                        <button type="button" class="unvalid-button" @click="deleteNote(note.id)">
                          <IX :size="16" />
                        </button>
                      </template>
                      <template #content>
                        <p class="text-xs">Supprimer</p>
                      </template>
                    </Tooltip>
                  </div>
                </template>
                <template v-else>
                  <h3 class="py-2 font-base text-sm text-ellipsis whitespace-nowrap overflow-clip">{{
        note.title }}
                  </h3>
                  <Tooltip v-show="!noteEditing && !newNote">
                    <template #text>
                      <button type="button"
                        class="flx-center text-light/40 duration-200 w-5 min-w-5 aspect-square hover:text-light"
                        @click="editNote(note.id)">
                        <IPencilSimple :size="16" />
                      </button>
                    </template>
                    <template #content>
                      <p class="text-xs">Editer</p>
                    </template>
                  </Tooltip>
                </template>
              </div>
            </li>
            <li v-if="newNote" class="py-2 px-3 bg-primary/10 rounded">
              <div class="flex justify-between items-center gap-3">
                <textarea ref="newNoteInput" class="input-note custom-scrollbar" v-model="newNoteText"
                  @keyup.enter="addNote" placeholder="Nouvelle note..."></textarea>
                <div class="flx-center flex-col gap-2">
                  <button type="button" class="valid-button" @click="addNote" :disabled="newNoteText.length === 0">
                    <ICheck :size="16" />
                  </button>
                  <button type="button" class="unvalid-button" @click="deleteNote()">
                    <IX :size="16" />
                  </button>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </Transition>
    </template>
  </WidgetCard>
</template>

<style lang="scss" scoped>
.input-note {
  @apply text-sm p-2 bg-primary/10 rounded w-full outline outline-1 outline-transparent focus-visible:outline-primary placeholder:text-xs placeholder:text-light/80;
}

.valid-button {
  @apply flex items-center justify-center text-green duration-200 w-5 min-w-5 aspect-square hover:opacity-80 disabled:opacity-50 disabled:pointer-events-none;
}

.unvalid-button {
  @apply flex items-center justify-center duration-200 w-5 min-w-5 aspect-square text-red hover:opacity-80;
}
</style>
