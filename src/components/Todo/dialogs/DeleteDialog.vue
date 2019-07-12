<template>
  <v-dialog v-model="todo.deleteDialog" scrollable max-width="50%">
		<v-card>
			<v-card-title >
				Todoを削除しますか？
			</v-card-title>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	props: ['todo']
}
</script>