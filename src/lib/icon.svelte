<script lang="ts">
    export let icon: string;
    export let clss: string;
    import data from './svg';
    const path = data.iconNames.filter(e => (e.name === icon)).map(x => x.path).toString();

</script>

<svg class={clss} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={path} />
    </svg>
