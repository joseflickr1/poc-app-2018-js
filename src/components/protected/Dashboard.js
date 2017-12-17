import React, {Component} from 'react'
import {logout} from '../../helpers/auth'
import {saveStatus} from "../../helpers/status";
import Button from 'material-ui/Button';
import styled from 'styled-components';
import Typography from 'material-ui/Typography';

const StyledButton = styled(Button)`
    span {
        color: palevioletred;
    }
`;

const StyledButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <StyledButtonWrapper>
                    <StyledButton onClick={() => logout()}>Logg ut</StyledButton>
                </StyledButtonWrapper>
                <Typography type="display1">Status</Typography>

                <StyledButtonWrapper>
                    <StyledButton onClick={() => saveStatus({text: 'hei', id: 123})}>
                        Lagre status
                    </StyledButton>
                </StyledButtonWrapper>

                <p>Her kommer liste med status</p>
            </div>
        )
    }
}