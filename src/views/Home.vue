<script setup>
import { ref, computed } from 'vue'
</script>

<template>
  <div class="home">
    <div>
      <h2>Pinia store</h2>

      <p>
        Dans Pinia, les getters sont souvent utilisés pour encapsuler la logique de récupération de données du state. Cela peut être utile dans les cas où vous devez effectuer des transformations ou des calculs sur les données du state avant de les renvoyer au composant. Cela permet de garder votre logique de récupération de données dans le store et de rendre votre composant plus simple.
        Cependant, si vous n'avez pas besoin de modifier ou de calculer les données du state avant de les renvoyer à votre composant, vous pouvez également accéder directement au state dans votre composant via <code>useStore().state.characters</code> (ou directement via la propriété <code>$state</code> si vous avez activé cette option dans votre store).
      </p>

      <p>
        Les getters vont être utilisé lorsqu'une modification doit être effectuée sur le state. Par exemple, dans le cas d'un filtrage de données, Calculs ou transformations de données (prix en dollars => euros), Agrégation de données (calcul d'une somme via un <code>reduce</code>), d'un formattage (date, heure etc.)
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.home {
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
  padding-bottom: 50px;

  p {
    margin-bottom: 10px;
  }
}
</style>