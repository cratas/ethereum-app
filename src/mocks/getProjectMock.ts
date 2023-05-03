

const TITLES = ['New office', 'AI startup', 'New laboratory',]

const getProjectMock = () => ({
    title: TITLES[Math.random()],
    description: '',
})

const  getRandomIndex = () => {
    return Math.random() * (10 - 0) + 0;
  }