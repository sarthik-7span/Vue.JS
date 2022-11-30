<template>
    <div>
        <div>
            <h1 v-if="good">{{ index }}/{{ gm }}</h1>
            <h2>{{ goodmor('qwert') }}</h2>
            <a v-bind:href="link">Sarthik Kevadiya</a>
            <input type="text" value="sarthik" v-model.lazy="sarthik">
            <h3>{{ sarthik }}</h3>
            <b v-html="Sunny"></b>
            <button @click="good = !good">Click Me</button>

            <p>{{ count }}</p>
            <button v-on:click.stop="increment(10)">increase10</button>
            <button @click="Decrement(20)">Decrese20</button>
            <div class="box" @mousemove.stop="mouse"><span>{{ X }}/ </span><span>{{ Y }}</span></div>
        </div>
        <div>
            <form action="">
                <input type="text" @keyup.left="fun">
                <button @click.once="fun">submit</button>
            </form>
            <p>hey:{{ troy(10, 33, 33) }}:{{h}}</p>
            <button @click="troy(10, 23, 33)">click me</button>
        </div>
        <div>
            <p>a-{{a}}</p>
            <p>b-{{b}}</p>
            <p>{{dun}}</p>
            <button @click="a++">click me for a</button>
            <button @click="b++">click me for b</button>
            <p>{{dun2}}</p>
        </div>
        <div>
            <h3 :class="{red,blue}" >class pe class</h3>
            <button @click="red=!red, blue=!blue">click red</button>
        </div>
        <div>
            <p v-show="hidden">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi praesentium illum dolore iusto recusandae repellat, impedit vero beatae rem saepe et dolores ex! Harum ea omnis esse sequi velit placeat!</p>
            <button @click="hidden = !hidden">click Me</button>
        </div>
        <div>
            <p v-for="items in bio" :key="items">{{items.name}} - {{items.cars}}</p>
        </div>
        <div>
            <input type="text" name="" id="" ref="data" value="sarthik">
            <button type="submit" @click="input()">submit</button>
            <p >data:{{data}}</p>
            <button >input ref</button>
        </div>
        <div>
            <h1>
                {{troy11()}}
            </h1>
        </div>
    </div>
</template>
<script>
export default {
    name: "TheIndex",
    data() {
        return {
            index: "hello sarthik",
            good: true,
            link: 'https://stackoverflow.com/questions/48929139/hide-div-onclick-in-vue-js',
            sarthik: "",
            Sunny: "<h3>sarthik</h3>",
            count: 3,
            X: 0,
            Y: 0,
            h: 0,
            a: 10,
            b: 30,
            red: true,
            blue: false,
            age: 20,
            hidden: true,
            data:"",
            bio: [
                {
                    name: "bunty",
                    cars: "luna"
                },
                {
                    name: "funty",
                    cars: "Tata"
                },
                {
                    name: "sunny",
                    cars: "Mustang"
                },
                {
                    name: "sarthik",
                    cars: "Audi"
                },
                {
                    name: "vikram",
                    cars: "Volvo"
                }
            ]
        }
    },
    props: {
        gm: String
    },
    methods: {
        goodmor(hello) {
            return "Good vali morning" + " " + hello + this.index;
        },
        increment(A) {
            this.count += A;
        },
        Decrement(B) {
            this.count -= B;
        },
        mouse() {
            this.X = event.offsetX;
            this.Y = event.offsetY
        },
        fun() {
            return console.log("entered")
        },
        troy(a, b, c) {
            return a + b + c;
        },
        input() {
            return this.data = this.$refs.data.value
        },
        troy11() {
            return "I'm Back"
        }
    },
    mounted() {
            console.log(this.$refs)
    },
    computed: {
        dun() {
            console.log("hello")
            return this.a + this.age
        },
        dun2() {
            console.log("fello")
            return this.b + this.age
        }
    }
}
</script>
<style>
.box {
    width: 100%;
    height: 600px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
}

span {
    color: white;
    font-size: 50px;
}
.red{
    font-size: 50px;
    color: red;
}
.blue {
    font-size: 50px;
    color: blue;
}
</style>