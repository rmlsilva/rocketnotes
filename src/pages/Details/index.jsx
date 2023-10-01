import { Container, Links, Content } from './styles'

import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'


export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota"/>

          <h1>Introudução ao React</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Corrupti recusandae cumque quidem exercitationem
             voluptas suscipit voluptates eveniet similique ab 
             tenetur quam sunt in, mollitia esse ex eius, 
             repellat reprehenderit nulla?
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Corrupti recusandae cumque quidem exercitationem
             voluptas suscipit voluptates eveniet similique ab 
             tenetur quam sunt in, mollitia esse ex eius, 
             repellat reprehenderit nulla?
             
             
          </p>


      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://rocketseat.com.br</a></li>
          <li><a href="#">https://rocketseat.com.br</a>
          </li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="node" />
      </Section>

      <Button title="Voltar" />

      </Content>
      </main>

    </Container>
  )
}