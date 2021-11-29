<template>
    <div>
        <pre v-highlightjs='sourcecode'><code class='javascript' /></pre>
    </div>
    <input
        v-model='search'
        type='text'
    >
    <p v-if='noResults'>Sorry, no results for {{ search }}</p>
    <div
        v-for='(r, i) in results'
        :key='i'
    >
        {{ r }}
    </div>
</template>

<script setup lang="ts">
import Fuse from 'fuse.js';
import { ref ,onMounted ,watch } from 'vue';
const arr = [
    {
        title: 'Old Man\'s War',
        author: {
            firstName: 'John',
            lastName: 'Scalzi'
        }
    },
    {
        title: 'The Lock Artist',
        author: {
            firstName: 'Steve',
            lastName: 'Hamilton'
        }
    },
    {
        title: 'HTML5',
        author: {
            firstName: 'Remy',
            lastName: 'Sharp'
        }
    },
    {
        title: 'Right Ho Jeeves',
        author: {
            firstName: 'P.D',
            lastName: 'Woodhouse'
        }
    },
    {
        title: 'The Code of the Wooster',
        author: {
            firstName: 'P.D',
            lastName: 'Woodhouse'
        }
    },
    {
        title: 'Thank You Jeeves',
        author: {
            firstName: 'P.D',
            lastName: 'Woodhouse'
        }
    },
    {
        title: 'The DaVinci Code',
        author: {
            firstName: 'Dan',
            lastName: 'Brown'
        }
    },
    {
        title: 'Angels & Demons',
        author: {
            firstName: 'Dan',
            lastName: 'Brown'
        }
    },
    {
        title: 'The Silmarillion',
        author: {
            firstName: 'J.R.R',
            lastName: 'Tolkien'
        }
    },
    {
        title: 'Syrup',
        author: {
            firstName: 'Max',
            lastName: 'Barry'
        }
    },
    {
        title: 'The Lost Symbol',
        author: {
            firstName: 'Dan',
            lastName: 'Brown'
        }
    },
    {
        title: 'The Book of Lies',
        author: {
            firstName: 'Brad',
            lastName: 'Meltzer'
        }
    },
    {
        title: 'Lamb',
        author: {
            firstName: 'Christopher',
            lastName: 'Moore'
        }
    },
    {
        title: 'Fool',
        author: {
            firstName: 'Christopher',
            lastName: 'Moore'
        }
    },
    {
        title: 'Incompetence',
        author: {
            firstName: 'Rob',
            lastName: 'Grant'
        }
    },
    {
        title: 'Fat',
        author: {
            firstName: 'Rob',
            lastName: 'Grant'
        }
    },
    {
        title: 'Colony',
        author: {
            firstName: 'Rob',
            lastName: 'Grant'
        }
    },
    {
        title: 'Backwards, Red Dwarf',
        author: {
            firstName: 'Rob',
            lastName: 'Grant'
        }
    },
    {
        title: 'The Grand Design',
        author: {
            firstName: 'Stephen',
            lastName: 'Hawking'
        }
    },
    {
        title: 'The Book of Samson',
        author: {
            firstName: 'David',
            lastName: 'Maine'
        }
    },
    {
        title: 'The Preservationist',
        author: {
            firstName: 'David',
            lastName: 'Maine'
        }
    },
    {
        title: 'Fallen',
        author: {
            firstName: 'David',
            lastName: 'Maine'
        }
    },
    {
        title: 'Monster 1959',
        author: {
            firstName: 'David',
            lastName: 'Maine'
        }
    }
];
const options = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    keys: [
        'title',
        'author.firstName'
    ]
};


// Change the pattern
const pattern = 'a';

const sourcecode = ref('1');
// import { useVueFuse } from 'vue-fuse';

const myList:Array<string> = [];
// const myList = ['aaaa', 'bbbb', 'cccc', 'abc', 'xyz'];
// const { search, results, noResults } = useVueFuse(myList);

// watch(search,new_val => {

//     console.log('search',new_val);
    

// });

setTimeout(() => {
    myList.push('aa');
    myList.push('ab');
    myList.push('ac');
    myList.push('ad');
    console.log('push');
    
}, 3000);
// watch(results,new_val => {

//     console.log('results',new_val);
    

// });
const fuse = new Fuse(myList);

console.log('fuse',fuse.search(pattern as string));
onMounted(() => {



    setTimeout(() => {
    
        // search.value = 'b';
        // console.log(results.value);
        let _fuse = ref(new Fuse(arr, options));

        console.log('_fuse',_fuse.value.search('b'));
    }, 3000);



    
});
// let sourcecode = 'var hello = 1';
</script>
