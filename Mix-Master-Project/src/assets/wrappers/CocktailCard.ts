import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;

  .img-container {
    height: 220px;
    background: var(--grey-100);
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .footer {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  h4 {
    font-size: 1.1rem;
    margin: 0;
  }

  h5 {
    font-size: 0.9rem;
    margin: 0;
    color: var(--grey-700);
    font-weight: 600;
  }

  p {
    margin: 0.25rem 0 0;
    color: var(--grey-900);
  }

  .btn {
    margin-top: 0.75rem;
    align-self: flex-start;
    text-decoration: none;
    background: var(--primary-500);
    color: var(--white);
    padding: 0.6rem 1rem;
    border-radius: 999px;
    font-weight: 700;
    letter-spacing: 1px;
    transition: var(--transition);

    &:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }
  }
`;

export default Wrapper;

