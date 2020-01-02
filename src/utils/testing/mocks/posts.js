import { initialState } from '../../../reducers/posts'

const mockPost = { title: 'mock' }

const mockPosts = [
  {
    _id: 1,
    title: 'Quintacolor',
    description: "QUINTACOLOR is a simple yet inspiring browser game. I found it's developer, Tom Quinn through Reddits 'I Need A Team' (INAT) subreddit, who then brought me on to compose music, produce SFX, and mix audio.",
    created: new Date('2018-05-14T22:03:42'),
    edited: new Date('2018-05-14T22:04:55'),
    thumbnail: 'http://jruttenberg.io/images/posts/1WdT4tBS9iyx/5142018100455-jz2kBZV-asdf.png',
    images: ['http://jruttenberg.io/images/posts/1WdT4tBS9iyx/5142018100455-jz2kBZV-asdf.png']
  },
  {
    _id: 2,
    title: 'Stormwind Theme Song But Every Note is Leeroy Jenkins',
    description: 'What would happen if you took the most recognizable music from World of Warcraft and replaced all the instruments with the most recognizable meme from World of Warcraft?',
    created: new Date('2018-03-20T21:25:04.414Z'),
    edited: new Date('2018-03-20T21:25:04.414Z'),
    thumbnail: 'http://jruttenberg.io/images/posts/JL7JkuKA5lVz/320201892504-3PyaZWx-500x500Stormwind-Leeroy.png',
    images: ['http://jruttenberg.io/images/posts/JL7JkuKA5lVz/320201892504-3PyaZWx-500x500Stormwind-Leeroy.png']
  },
  {
    _id: 3,
    title: 'Story Sounds 1 - Water',
    description: '"Story Sounds 1 - Water" is the first of many audio sample packs that are meant to bolster the immersion and storytelling capabilities of digital media like video games. All of these samples were recorded in Iceland in February of 2018. Soon they will be available for purchase on the Unity and Unreal Asset Stores.',
    created: new Date('2018-02-27T15:59:49.041Z'),
    edited: new Date('2018-02-27T16:42:34.327Z'),
    thumbnail: 'http://jruttenberg.io/images/posts/7xSlVNpBr0D1/227201835949-jGzDmsw-Water-copy.png',
    images: ['http://jruttenberg.io/images/posts/7xSlVNpBr0D1/227201835949-jGzDmsw-Water-copy.png']
  }
]

const createMockPostsState = overrides => ({
  ...initialState,
  ...overrides
})

export { mockPost, mockPosts, createMockPostsState }
