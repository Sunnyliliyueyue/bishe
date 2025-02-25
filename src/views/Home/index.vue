<template>
    <div>
        <TypeNav></TypeNav>
        <listContainer></listContainer>
        <recommend></recommend>
        <Rank></Rank>
        <Like></Like>
        <Floor></Floor>
        <Brand></Brand>
    </div>
</template>

<script>
import TypeNav from '@/components/TypeNav';
import listContainer from '@/components/listContainer';
import recommend from '@/components/recommend';
import Rank from '@/components/Rank';
import Like from '@/components/Like';
import Floor from '@/components/Floor';
import Brand from '@/components/brand';
    export default {
        components:{
            TypeNav,
            listContainer,
            recommend,
            Rank,
            Like,
            Floor,
            Brand
        }
    }
</script>

<style lang="less" scoped>

</style>