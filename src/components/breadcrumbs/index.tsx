import React from 'react'
import {
  Col,
  Row,
  Breadcrumb as BreadcrumbB,
  BreadcrumbItem,
  Container,
  Label
} from 'reactstrap'

interface BreadcrumbItems {
  label: string
  path: string
  active?: boolean
}

interface BreadcrumbsProps {
  title?: string
  breadcrumbItems?: Array<BreadcrumbItems>
}

const Breadcrumbs = ({ title, breadcrumbItems }: BreadcrumbsProps) => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <Label className="page-title">{title}</Label>
            <div className="page-path">
              <BreadcrumbB>
                <BreadcrumbItem>
                  <a href="/">React</a>
                </BreadcrumbItem>
                {breadcrumbItems?.map((item, index) => {
                  return item.active ? (
                    <BreadcrumbItem key={index.toString()} href={item.path}>
                      <span>{item.label}</span>
                    </BreadcrumbItem>
                  ) : (
                    <BreadcrumbItem key={index.toString()} href={item.path}>
                      <a href="#">{item.label}</a>
                    </BreadcrumbItem>
                  )
                })}
              </BreadcrumbB>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Breadcrumbs
