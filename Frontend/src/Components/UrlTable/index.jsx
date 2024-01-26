import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import { UseContext } from '../ProviderContext'

const UrlTable = () => {
    const URL = useContext(UseContext)
    return (
        <>
        <h1>Most Frequently</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Original URL</th>
                        <th>Short URL</th>
                        <th>Number of View</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        URL?.length > 0
                            ? URL.map((url, index) => (
                                <tr key={index}>
                                    <td>{url.url}</td>
                                    <td>{url.short}</td>
                                    <td>{url.count}</td>
                                </tr>
                            ))
                            : <>
                                <tr >
                                    <td>----</td>
                                    <td>----</td>
                                    <td>----</td>
                                </tr>
                            </>
                    }
                </tbody>
            </Table>
        </>
    )
}
export default UrlTable
