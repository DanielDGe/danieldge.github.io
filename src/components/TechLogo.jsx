import { useState } from 'react'

const DEVICON_BASE =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const technologyLogos = {
  'Java 17': 'java/java-original.svg',
  'Spring Boot': 'spring/spring-original.svg',
  'C#': 'csharp/csharp-original.svg',
  'ASP.NET Core': 'dotnetcore/dotnetcore-original.svg',
  'Node.js': 'nodejs/nodejs-original.svg',
  React: 'react/react-original.svg',
  'Material UI': 'materialui/materialui-original.svg',
  Angular: 'angular/angular-original.svg',
  TypeScript: 'typescript/typescript-original.svg',
  JavaScript: 'javascript/javascript-original.svg',
  PostgreSQL: 'postgresql/postgresql-original.svg',
  MariaDB: 'mariadb/mariadb-original.svg',
  MySQL: 'mysql/mysql-original.svg',
  Oracle: 'oracle/oracle-original.svg',
  MongoDB: 'mongodb/mongodb-original.svg',
  RabbitMQ: 'rabbitmq/rabbitmq-original.svg',
  Keycloak: 'keycloak/keycloak-original.svg',
  Docker: 'docker/docker-original.svg',
  Git: 'git/git-original.svg',
  GitLab: 'gitlab/gitlab-original.svg',
  'GitHub Actions': 'githubactions/githubactions-original.svg',
  Maven: 'maven/maven-original.svg',
}

function getFallbackLabel(name) {
  return name
    .replace(/[^A-Za-z0-9+#]/g, '')
    .slice(0, 2)
    .toUpperCase()
}

function TechLogo({ name }) {
  const [failed, setFailed] = useState(false)
  const logoPath = technologyLogos[name]

  if (!logoPath || failed) {
    return (
      <span className="tech-logo tech-logo--fallback" aria-hidden="true">
        {getFallbackLabel(name)}
      </span>
    )
  }

  return (
    <span className="tech-logo" aria-hidden="true">
      <img
        src={DEVICON_BASE + '/' + logoPath}
        alt=""
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
    </span>
  )
}

export default TechLogo
