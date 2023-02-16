export default defineAppConfig({
  docus: {
    title: 'Microbial Warfare',
    description: 'A comprehensive effort to map microbial defense systems against their viruses',
    // image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: '@MDMlab_Paris',
      github: 'mdmparis',
    },
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      title: 'Microbial Warfare',
      logo: false,
      showLinkIcon: true,
      exclude: []
    },
    footer: {
      credits: {
        text: 'MDM Labs, Paris',
        href: 'https://mdmlab.fr/'
      },
      textLinks: [],
      iconLinks: []
    },
    gitlab: {
      owner: 'defense-finder',
      repo: 'wiki',
      branch: "main",
      edit: true,
    },
  }
})
