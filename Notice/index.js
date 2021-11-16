/*
 * Notice
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Tablet } from 'react-feather';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './Styles.css';

export default function Notice() {
  return (
    <body className="mainscreen">
        <script>
            const items=
        </script>
        <table>
            <thead>
                <tr>
                    <th valign="top">
                    <div className="title-background">
                        <div className="title-globalLink">
                            globalLink 서비스
                            <div className="title-globalLink-text">
                                공지사항
                            </div>
                        </div>
                    </div>
                    </th>
                    <th valign="top">
                    <table className="mainTable">
                        <thead class="mainTable-topSpan">
                            <tr class="mainTable-topLine">
                                <th class="mainTable-topNum"></th>
                                <th>제목</th>
                                <th class="mainTable-topReg">등록일</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="mainTable-bottomLine">
                                <td>
                                    <span class="mainTable-numSpan">
                                        1
                                    </span>
                                </td>
                                <td class="mainTable-sideLine">
                                    <span class="mainTable-middleSpan">
                                        테스트 모델입니다.
                                    </span>
                                </td>
                                <td>
                                    <span class="mainTable-daySpan">
                                        2021-10-25
                                    </span>
                                </td>
                            </tr>
                            <tr class="mainTable-bottomLine">
                                <td>
                                    <span class="mainTable-numSpan">
                                        2
                                    </span>
                                </td>
                                <td class="mainTable-sideLine">
                                    <span class="mainTable-middleSpan">
                                        테스트_테스트_테스트_테스트 모델입니다.
                                    </span>
                                </td>
                                <td>
                                    <span class="mainTable-daySpan">
                                        2021-10-25
                                    </span>
                                </td>
                            </tr>
                            <tr class="mainTable-bottomLine">
                                <td>
                                    <span class="mainTable-numSpan">
                                        3
                                    </span>
                                </td>
                                <td class="mainTable-sideLine">
                                    <span class="mainTable-middleSpan">
                                        테스트_테스트_테스트_테스트 모델입니다.
                                    </span>
                                </td>
                                <td>
                                    <span class="mainTable-daySpan">
                                        2021-10-25
                                    </span>
                                </td>
                            </tr>
                            <tr class="mainTable-bottomLine">
                                <td>
                                    <span class="mainTable-numSpan">
                                        4
                                    </span>
                                </td>
                                <td class="mainTable-sideLine">
                                    <span class="mainTable-middleSpan">
                                        테스트_테스트_테스트_테스트 모델입니다.
                                    </span>
                                </td>
                                <td>
                                    <span class="mainTable-daySpan">
                                        2021-10-25
                                    </span>
                                </td>
                            </tr>
                            <tr class="mainTable-bottomLine">
                                <td>
                                    <span class="mainTable-numSpan">
                                        5
                                    </span>
                                </td>
                                <td class="mainTable-sideLine">
                                    <span class="mainTable-middleSpan">
                                        테스트_테스트_테스트_테스트 모델입니다.
                                    </span>
                                </td>
                                <td>
                                    <span class="mainTable-daySpan">
                                        2021-10-25
                                    </span>
                                </td>
                            </tr>
                            <tr class="mainTable-bottomLine">
                                <td>
                                    <span class="mainTable-numSpan">
                                        6
                                    </span>
                                </td>
                                <td class="mainTable-sideLine">
                                    <span class="mainTable-middleSpan">
                                        테스트_테스트_테스트_테스트 모델입니다.
                                    </span>
                                </td>
                                <td>
                                    <span class="mainTable-daySpan">
                                        2021-10-25
                                    </span>
                                </td>
                            </tr>
                            <tr class="mainTable-bottomLine">
                                <td>
                                    <span class="mainTable-numSpan">
                                        7
                                    </span>
                                </td>
                                <td class="mainTable-sideLine">
                                    <span class="mainTable-middleSpan">
                                        테스트_테스트_테스트_테스트 모델입니다.
                                    </span>
                                </td>
                                <td>
                                    <span class="mainTable-daySpan">
                                        2021-10-25
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot height="0px"></tfoot>
                    </table>  
                    <table class="mainTable-bottomTable">
                        <td valign="middle">
                            <span class="mainTable-searchSpan">
                                SEARCH : 
                            </span>
                        </td>
                        <td valign="middle">
                            <div class="mainTable-search-background">

                            </div>
                        </td>
                        <td valign="middle">
                            <table class="mainTable-numList-table" valign="middle">
                                <td class="mainTable-numList-leftTag">이전</td>
                                <td class="mainTable-numList-num">1</td>
                                <td class="mainTable-numList-num">2</td>
                                <td class="mainTable-numList-num">3</td>
                                <td class="mainTable-numList-num">4</td>
                                <td class="mainTable-numList-num">5</td>
                                <td class="mainTable-numList-rightTag">이후</td>
                            </table>
                        </td>
                    </table>
                    </th>
                </tr>
            </thead>
        </table>
    </body>
  );
}