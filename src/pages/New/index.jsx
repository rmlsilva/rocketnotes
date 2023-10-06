import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Form } from './styled';

export function New(){
    const [ links, setLinks ] = useState([]);
    const [ newLink, setNewLink ] = useState("");

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("");
    }

    return (
        <Container>
            <Header>
            </Header>

                <main>
                    <Form>
                        <header>
                            <h1>Criar Nota</h1>
                            <Link to="/">Voltar</Link>
                        </header>
                        <Input placeholder="Titulo">
                        </Input>

                        <Textarea placeholder="Observações"> </Textarea>

                        <Section title="Links úteis">
                            {
                                links.map((link, index) => (
                                    <NoteItem
                                    key={String(index)}
                                    value={link}
                                    onClick={() => { } }
                                    /> 
                                ))
                            }
                            <NoteItem
                             isNew
                             placeholder="Novo Link" 
                             value={newLink}
                             onChange={ e => setNewLink(e.target.value)}
                             onClick={handleAddLink}
                             />                        
                            
                            
                        </Section>

                        <Section title="Marcadores">
                            <div className='tags'>

                            <NoteItem value="react" />
                            <NoteItem isNew placeholder="Nova Tag" />

                            </div>
                        </Section>

                        <Button title="Salvar" />

                    </Form>
                </main>
        </Container>
    )
}