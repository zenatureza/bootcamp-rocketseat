import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '../../services/api';

import {
  Loading,
  Owner,
  IssuesFilter,
  IssueList,
  PageSelector,
} from './styles';
import Container from '../../components/Container';

export default class Repository extends Component {
  // object property in proptypes lib is 'shape'
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    filter: 'all',
    page: 1,
  };

  async componentDidMount() {
    const { filter, page } = this.state;
    const [repository, issues] = await this.getRepositoryData(filter, page);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  handleFilter = async filter => {
    const { page } = this.state;
    const [repository, issues] = await this.getRepositoryData(filter, page);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  };

  getRepositoryData = async (filter, page) => {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);

    // executes in parallel
    return Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: `${filter}`,
          per_page: 5,
          page,
        },
      }),
    ]);
  };

  handlePage = async action => {
    const { page } = this.state;
    const newPage = action === 'next' ? page + 1 : page - 1;
    const { filter } = this.state;

    const [repository, issues] = await this.getRepositoryData(filter, newPage);
    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
      page: newPage,
    });
  };

  render() {
    const { repository, issues, loading, page } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <IssuesFilter>
          <button
            key="all"
            type="button"
            onClick={() => this.handleFilter('all')}
          >
            All issues
          </button>
          <button
            key="open"
            data-key="open"
            type="button"
            onClick={() => this.handleFilter('open')}
          >
            Open issues
          </button>
          <button
            key="closed"
            data-key="closed"
            type="button"
            onClick={() => this.handleFilter('closed')}
          >
            Closed issues
          </button>
        </IssuesFilter>

        <PageSelector>
          {page > 1 && (
            <button
              key="previousPage"
              type="button"
              className="previousPage"
              onClick={() => this.handlePage('previous')}
            >
              Previous
            </button>
          )}
          {issues.length > 0 && (
            <button
              key="nextPage"
              className="nextPage"
              type="button"
              onClick={() => this.handlePage('next')}
            >
              Next
            </button>
          )}
        </PageSelector>

        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
      </Container>
    );
  }
}
