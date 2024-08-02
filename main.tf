#modules
module "vpc" {
  source = "./modules/vpc"
}

module "webapp" {
  source            = "./modules/webapp"
  vpc_id            = module.vpc.vpc_id
  public_subnet_ids = module.vpc.public_subnet_ids
  private_subnet_id = module.vpc.private_subnet_ids[0]
  web_ami           = var.web_ami
  key_name          = var.key_name
}

module "db" {
  source             = "./modules/db"
  vpc_id             = module.vpc.vpc_id
  private_subnet_ids = module.vpc.private_subnet_ids
  bastion_sg_id      = module.webapp.bastion_sg_id
  db_ami             = var.db_ami
  key_name           = var.key_name
  keypair            = module.webapp.keypair
}
