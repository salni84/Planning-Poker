pipeline {

  agent {
    docker { image 'node:latest' }
  }

  stages {

    stage('Install') {
      steps { sh 'cd Poker-Frontend && npm install' }
    }

      stage('e2e tests') {
            steps { sh 'cd Poker-Frontend && npm run-script e2e' }
        }


    stage('Build') {
      steps { sh 'cd Poker-Frontend && npm run-script build' }
    }
  }
}
