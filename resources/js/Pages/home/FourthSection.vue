<template>
    <div class="relative w-full md:w-10/12 px-8 py-16 mx-auto">
        <h2 class="text-4xl font-extrabold text-center mb-8">Avis de nos clients</h2>
        
        <div class="mb-8 flex flex-col gap-2 mx-auto" style="max-width: 550px;">
            <img src="/images/home/5Start_slate.png" alt="4 start" style="width: 150px; margin: auto;">
            <p class="font-bold text-xl"><span style="color: #ff9000;">«</span>&nbsp;L'energia a fait un travail extraordinaire ! La qualité du service était impeccable, l'équipe était très sympathique et le résultat final a dépassé mes attentes.Je les recommande chaleureusement.&nbsp;<span style="color: #ff9000;">»</span></p>
            <span>Nicolas D.</span>
            <span>le 03/06/2023</span>
        </div>

        <div v-if="counter == 0" class="flex md:flex-row flex-col items-center md:justify-center md:items-stretch w-full gap-4">
            <div class="flex flex-col justify-between gap-2 w-full md:w-4/12 p-4 rounded bg-white dark:bg-slate-800" style="max-width: 300px;">
                <div class="flex flex-col gap-2">
                    <div class="cursor-pointer flex justify-start">
                        <img src="/images/home/5Start.png" alt="4 start" style="width: 120px;">
                    </div>

                    <p class="text-base md:text-lg font-medium leading-normal text-gray-800 dark:text-white">
                        <span style="color: #ff9000;">«</span>
                        &nbsp;Très bien&nbsp;
                        <span style="color: #ff9000;">»</span>
                    </p>
                </div>

                <div class="flex justify-start items-center flex-row space-x-2.5">
                    <div>
                        <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/men/21.jpg" alt="Connor Bell">
                    </div>
                    <div class="flex flex-col justify-start items-start space-y-2">
                        <p class="text-base font-medium leading-none text-gray-800 dark:text-white">Vincent J</p>
                        <p class="text-sm leading-none text-gray-600 dark:text-white">21/7/2023</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col justify-between gap-2 w-full md:w-4/12 p-4 rounded bg-white dark:bg-slate-800" style="max-width: 300px;">
                <div class="flex flex-col gap-2">
                    <div class="cursor-pointer flex justify-start">
                        <img src="/images/home/5Start.png" alt="4 start" style="width: 120px;">
                    </div>

                    <p class="text-base md:text-lg font-medium leading-normal text-gray-800 dark:text-white">
                        <span style="color: #ff9000;">«</span>
                        &nbsp;Service compétent et réactif.&nbsp;
                        <span style="color: #ff9000;">»</span>
                    </p>
                </div>
        
                <div class="flex justify-start items-center flex-row space-x-2.5">
                    <div>
                        <img src="https://i.ibb.co/QcqyrVG/Mask-Group.png" alt="girl-avatar" />
                    </div>
                    <div class="flex flex-col justify-start items-start space-y-2">
                        <p class="text-base font-medium leading-none text-gray-800 dark:text-white">Anna K</p>
                        <p class="text-sm leading-none text-gray-600 dark:text-white">8/7/2023</p>
                    </div>
                </div>
            </div>
           
            <div class="flex flex-col justify-between gap-2 w-full md:w-4/12 p-4 rounded bg-white dark:bg-slate-800" style="max-width: 300px;">
                <div class="flex flex-col gap-2">
                    <div class="cursor-pointer flex justify-start">
                        <img src="/images/home/4StartAndHalf.png" alt="4 start" style="width: 120px;">
                    </div>
    
                    <p class="text-base md:text-lg font-medium leading-normal text-gray-800 dark:text-white">
                        <span style="color: #ff9000;">«</span>
                        &nbsp;C'est clair, respect des RDV. Bien accompagné.&nbsp;
                        <span style="color: #ff9000;">»</span>
                    </p>
                </div>
        
                <div class="flex justify-start items-center flex-row space-x-2.5">
                    <div>
                        <img class="w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/men/29.jpg" alt="Lee Fields">
                    </div>
                    <div class="flex flex-col justify-start items-start space-y-2">
                        <p class="text-base font-medium leading-none text-gray-800 dark:text-white">Pascal D</p>
                        <p class="text-sm leading-none text-gray-600 dark:text-white">14/6/2023</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter : 0
        }
    }
}
</script>

<style scoped>
</style>